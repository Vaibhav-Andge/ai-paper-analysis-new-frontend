// analysis.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalysisService {
  constructor(private http: HttpClient) {}

  analyzePapers() {
    return this.http.get<{ summary: string }>('http://localhost:8000/api/analyze');
  }
}
