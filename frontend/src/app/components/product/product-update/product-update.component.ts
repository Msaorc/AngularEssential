import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  product: Product = {
    name: '',
    price: undefined
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.findById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.messageSuccess("Produto alterado com sucesso!")
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
