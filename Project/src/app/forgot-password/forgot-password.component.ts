import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService) {

  }

  forgotpasswordform = this.builder.group({
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    otp: this.builder.control('', Validators.required),
    newPassword: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: this.builder.control('', Validators.required)
  });
  proceedforgotpassword() {
    if (this.forgotpasswordform.valid) {
      this.service.RegisterUser(this.forgotpasswordform.value).subscribe(result => {
        this.toastr.success("Password reset successful! Please log in with your new password.", "Forgot Password")
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
