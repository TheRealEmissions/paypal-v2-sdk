import { TProduct } from "./../Types/Objects/Product.js";
import { ListProductsResponse, TListProductsResponse } from "./../Types/APIResponses/ListProducts.js";
import PayPal from "../PayPal.js";
import { LinkDescription } from "../Types/Objects/LinkDescription.js";
import { ProductCollectionElement } from "../Types/Objects/ProductCollectionElement.js";
import { Product } from "../Types/Objects/Product.js";
import { PatchRequest, TPatchRequest } from "../Types/Objects/PatchRequest.js";
import { ProductUpdateError } from "../Errors/Products/ProductUpdateError.js";
import { Integer } from "../Types/Utility.js";

export class Products {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @deprecated Use Products#getMany()
   */
  public listProducts(page?: number, pageSize?: number, totalRequired?: boolean) {
    return this.getMany(page, pageSize, totalRequired);
  }

  public async getMany<N extends number, U extends number>(
    page?: Integer<N>,
    pageSize?: Integer<U>,
    totalRequired?: boolean
  ) {
    const response = await this.PayPal.getAPI().get<TListProductsResponse<number, number>>("/v1/catalogs/products", {
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
      response.data.links.map((link) => LinkDescription.fromObject(link)),
      response.data.products.map((product) => ProductCollectionElement.fromObject(product)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  public async create(
    product: Product,
    paypalRequestId?: string,
    prefer?: "minimal" | "representation"
  ): Promise<Product>;
  public async create(
    product: (product: Product) => void,
    paypalRequestId?: string,
    prefer?: "minimal" | "representation"
  ): Promise<Product>;
  public async create(
    product: Product | ((product: Product) => void),
    paypalRequestId?: string,
    prefer?: "minimal" | "representation"
  ) {
    const productInstance = product instanceof Product ? product : new Product();
    if (typeof product === "function") product(productInstance);
    const response = await this.PayPal.getAPI().post<TProduct>(
      "/v1/catalogs/products",
      productInstance.toAttributeObject<TProduct>(),
      {
        headers: {
          "Content-Type": "application/json",
          ...(prefer ? { Prefer: `return=${prefer}` } : {}),
          ...(paypalRequestId ? { "PayPal-Request-Id": paypalRequestId } : {}),
        },
      }
    );

    return Product.fromObject(response.data);
  }

  public async update(product: Product, patchRequest: PatchRequest): Promise<Product>;
  public async update(product: Product, patchRequest: (patchRequest: PatchRequest) => void): Promise<Product>;
  public async update(product: string, patchRequest: PatchRequest): Promise<Product>;
  public async update(product: string, patchRequest: (patchRequest: PatchRequest) => void): Promise<Product>;
  public async update(product: (product: Product) => void, patchRequest: PatchRequest): Promise<Product>;
  public async update(
    product: (product: Product) => void,
    patchRequest: (patchRequest: PatchRequest) => void
  ): Promise<Product>;
  public async update(
    product: Product | string | ((product: Product) => void),
    patchRequest: PatchRequest | ((patchRequest: PatchRequest) => void)
  ) {
    const productInstance =
      typeof product !== "string" ? (product instanceof Product ? product : new Product()) : undefined;
    if (typeof product === "function" && productInstance) product(productInstance);
    const productId = typeof product === "string" ? product : productInstance!.getId();
    if (!productId) throw new Error("Product ID is required to update product");
    const patchRequestInstance = patchRequest instanceof PatchRequest ? patchRequest : new PatchRequest();
    if (typeof patchRequest === "function") patchRequest(patchRequestInstance);
    const response = await this.PayPal.getAPI().patch(
      `/v1/catalogs/products/${productId}`,
      patchRequestInstance.toAttributeObject<TPatchRequest>(),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const SUCCESS_RESPONSE = 204;
    if (response.status !== SUCCESS_RESPONSE)
      throw new ProductUpdateError("Unexpected response status code", response.data);

    return this.get(productId);
  }

  public async get(product: Product): Promise<Product>;
  public async get(product: string): Promise<Product>;
  public async get(product: (product: Product) => void): Promise<Product>;
  public async get(product: Product | string | ((product: Product) => void)) {
    const productInstance =
      typeof product !== "string" ? (product instanceof Product ? product : new Product()) : undefined;
    if (typeof product === "function" && productInstance) product(productInstance);
    const productId = typeof product === "string" ? product : productInstance!.getId();
    if (!productId) throw new Error("Product ID is required to get product");
    const response = await this.PayPal.getAPI().get<TProduct>(`/v1/catalogs/products/${productId}`);

    return Product.fromObject(response.data);
  }
}
