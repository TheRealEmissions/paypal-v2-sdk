import ListProductsResponse, { TListProductsResponse } from "./../Types/APIResponses/ListProducts";
import PayPal from "../PayPal";
import LinkDescription from "../Types/Objects/LinkDescription";
import ProductCollectionElement from "../Types/Objects/ProductCollectionElement";

class Products {
  PayPal: PayPal;
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
}

export default Products;
