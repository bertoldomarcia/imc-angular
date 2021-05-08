import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('height') height: ElementRef<HTMLInputElement>;
  @ViewChild('weight') weight: ElementRef<HTMLInputElement>;
  @ViewChild('result1') result1: ElementRef<HTMLInputElement>;
  @ViewChild('result2') result2: ElementRef<HTMLInputElement>;
  @ViewChild('result3') result3: ElementRef<HTMLInputElement>;
  @ViewChild('result4') result4: ElementRef<HTMLInputElement>;
  @ViewChild('result5') result5: ElementRef<HTMLInputElement>;
  @ViewChild('result6') result6: ElementRef<HTMLInputElement>;

  public calcularIMC(): void {
    let height = Number(this.height.nativeElement.value);
    let weight = Number(this.weight.nativeElement.value);
    if (height > 0 && weight > 0) {
      let total = weight / Number(height * height);
      this.showTable(total);
    } else {
      alert("Por favor, preencha a altura e o peso!");
    }
  }

  public clearIMC(): void {
    this.height.nativeElement.value = "";
    this.weight.nativeElement.value = "";
    this.clearTable();
  }

  public clearTable(): void {
    this.result1.nativeElement.style.backgroundColor = "white";
    this.result1.nativeElement.style.color = "rgba(0,0,0,0.87)";
    this.result2.nativeElement.style.backgroundColor = "white";
    this.result2.nativeElement.style.color = "rgba(0,0,0,0.87)";
    this.result3.nativeElement.style.backgroundColor = "white";
    this.result3.nativeElement.style.color = "rgba(0,0,0,0.87)";
    this.result4.nativeElement.style.backgroundColor = "white";
    this.result4.nativeElement.style.color = "rgba(0,0,0,0.87)";
    this.result5.nativeElement.style.backgroundColor = "white";
    this.result5.nativeElement.style.color = "rgba(0,0,0,0.87)";
    this.result6.nativeElement.style.backgroundColor = "white";
    this.result6.nativeElement.style.color = "rgba(0,0,0,0.87)";
  }

  public showTable(imc): void {
    this.clearTable();
    if (imc <= 18.5) {
      this.result1.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result1.nativeElement.style.color = "#f2f2f2";
    }
    else if (imc >= 18.6 && imc < 25) {
      this.result2.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result2.nativeElement.style.color = "#f2f2f2";
    }
    else if (imc >= 25 && imc < 30) {
      this.result3.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result3.nativeElement.style.color = "#f2f2f2";
    }
    else if (imc >= 30 && imc < 35) {
      this.result4.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result4.nativeElement.style.color = "#f2f2f2";
    }
    else if (imc >= 35 && imc < 40) {
      this.result5.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result5.nativeElement.style.color = "#f2f2f2";
    }
    else if (imc >= 40) {
      this.result6.nativeElement.style.backgroundColor = "#2ab6a9";
      this.result6.nativeElement.style.color = "#f2f2f2";
    }
  }

}
