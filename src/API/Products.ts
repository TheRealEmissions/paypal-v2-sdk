import { TProduct } from "./../Types/Objects/Product.js";
import ListProductsResponse, { TListProductsResponse } from "./../Types/APIResponses/ListProducts.js";
import PayPal from "../PayPal.js";
import LinkDescription from "../Types/Objects/LinkDescription.js";
import ProductCollectionElement from "../Types/Objects/ProductCollectionElement.js";
import Product from "../Types/Objects/Product.js";
import PatchRequest, { TPatchRequest } from "../Types/Objects/PatchRequest.js";
import ProductUpdateError from "../Errors/Products/ProductUpdateError.js";

class Products {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @deprecated Use Products#getMany()
   */
  listProducts(page?: number, pageSize?: number, totalRequired?: boolean) {
    return this.getMany(page, pageSize, totalRequired);
  }

  async getMany(page?: number, pageSize?: number, totalRequired?: boolean) {
    const response = await this.PayPal.API.get<TListProductsResponse>("/v1/catalogs/products", {
      params: {
        page,
        page_size: pageSize,
        total_required: totalRequired,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return new ListProductsResponse(
      response.data.links.map((link) => new LinkDescription().fromObject(link)),
      response.data.products.map((product) => new ProductCollectionElement().fromObject(product)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  async create(product: Product, paypalRequestId?: string, prefer?: "minimal" | "representation") {
    const response = await this.PayPal.API.post<TProduct>(
      "/v1/catalogs/products",
      product.toAttributeObject<TProduct>(),
      {
        headers: {
          "Content-Type": "application/json",
          ...(prefer ? { Prefer: `return=${prefer}` } : {}),
          ...(paypalRequestId ? { "PayPal-Request-Id": paypalRequestId } : {}),
        },
      }
    );

    return new Product().fromObject(response.data);
  }

  async update(product: Product | string, patchRequest: PatchRequest) {
    const response = await this.PayPal.API.patch(
      `/v1/catalogs/products/${product instanceof Product ? product.id : product}`,
      patchRequest.toAttributeObject<TPatchRequest>(),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 204) throw new ProductUpdateError("Unexpected response status code", response.data);

    return this.get(product);
  }

  async get(product: Product | string) {
    const response = await this.PayPal.API.get<TProduct>(
      `/v1/catalogs/products/${product instanceof Product ? product.id : product}`
    );

    return new Product().fromObject(response.data);
  }
}

export default Products;
