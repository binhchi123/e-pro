import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AccountService } from 'src/app/services/account.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isBool = true;
  account: any;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  // constructor(private http: HttpClient, private accService: AccountService, private route: Router) { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    this.account = localStorage.getItem('loginForm');
    this.account = JSON.parse(this.account);
  }
  dnoneEye() {
    let eye = document.getElementById('eye') as HTMLDivElement | null;
    let password = document.getElementById('password') as HTMLInputElement | null;
    if (password?.value == '') {
      eye?.classList.add('d-none');
    } else {
      eye?.classList.remove('d-none');
    }
  }
  // login(): void {
  //   let cart: any = localStorage.getItem('cart');
  //   let accountSignUp: any = localStorage.getItem('accountSignUp');
  //   accountSignUp = JSON.parse(accountSignUp);
  //   cart = JSON.parse(cart);
  //   this.accService.getAll().subscribe((data) => {
  //     if (accountSignUp.email === this.loginForm.value.email && accountSignUp.password === this.loginForm.value.password) {
  //       const user = accountSignUp;
  //       if (user) {
  //         // alert("Đăng Nhập Thành Công ! ");

  //         this.loginForm.reset();
  //         localStorage.setItem('loginForm', JSON.stringify(user)),
  //           this.route.navigate(['/']);
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Logged in successfully',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         this.accService.isUserLoggedIn.next(true);
  //         this.accService.totalCard.next(cart.length);
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'wrong login information',
  //           text: 'please check again',
  //           footer: '<a href="">Why do I have this issue?</a>'
  //         })
  //       }
  //     }
  //   })
  // }
  showpass(): void {
    let eye = document.getElementById('eye') as HTMLDivElement | null;
    if (this.isBool) {
      document.getElementById('password')?.setAttribute("type", "text");
      eye?.setAttribute('class', 'fa-solid fa-eye-slash eyes');
      this.isBool = false
    } else {
      document.getElementById('password')?.setAttribute("type", "password")
      this.isBool = true;
      eye?.setAttribute('class', 'fa-solid fa-eye eyes');
    }
  }

}
