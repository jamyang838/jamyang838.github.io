import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css',
})
export class CalculateComponent {
  laser_pulse_period: number = 2;
  laser_pulse_number: number = 10;
  aod_period: number = 100;
  aod_number: number = 20;
  crc: number = 1;

  calculateCRC8(data: number[]): number {
    const polynomial = 0x07;
    let crc = 0x00;
    for (let i = 0; i < data.length; i++) {
      crc ^= data[i];
      for (let j = 0; j < 8; j++) {
        if ((crc & 0x80) !== 0) {
          crc = (crc << 1) ^ polynomial;
        } else {
          crc <<= 1;
        }
      }
    }
    crc = crc >>> 0;
    return crc % 256;
  }
  converNumbertoHEXString(value: number): string {
    return value.toString(16).padStart(2,'0');
  }

  convertAODNumberToHex(): string {
    const byte0 = 0xff;
    const byte1 = 0x01;
    const byte2 = this.laser_pulse_period & 0xff;
    const byte3 = (this.laser_pulse_period >> 8) & 0xff;
    const byte4 = this.laser_pulse_number & 0xff;
    const byte5 = (this.laser_pulse_number >> 8) & 0xff;
    const byte6 = this.aod_period & 0xff;
    const byte7 = (this.aod_period >> 8) & 0xff;
    const byte8 = this.aod_number & 0xff;
    const byte9 = (this.aod_number >> 8) & 0xff;
    const byteCRC = this.calculateCRC8([byte2,byte3,byte4,byte5,byte6,byte7,byte8,byte9]);
    // return byteCRC.toString();
    return `
    0x${this.converNumbertoHEXString(byte0)},\
    0x${this.converNumbertoHEXString(byte1)},\
    0x${this.converNumbertoHEXString(byte2)},\
    0x${this.converNumbertoHEXString(byte3)},\
    0x${this.converNumbertoHEXString(byte4)},\
    0x${this.converNumbertoHEXString(byte5)},\
    0x${this.converNumbertoHEXString(byte6)},\
    0x${this.converNumbertoHEXString(byte7)},\
    0x${this.converNumbertoHEXString(byte8)},\
    0x${this.converNumbertoHEXString(byte9)},\
    0x${this.converNumbertoHEXString(byteCRC)}
    `;
  }

  copyToClipboard(value: string): void {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    alert('內容已複製到剪貼簿');
  }
 
}
