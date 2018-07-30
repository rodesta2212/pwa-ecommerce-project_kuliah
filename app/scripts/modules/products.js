/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Product from 'product';

//   constructor (sku, title, price, image, description='') {

// Normally you would get these from a server
export const products = [
  new Product('Casio G-Shock GA-100DE-2ADR_BA-110DE-2A2DR', 'Casio G-Shock GA-100DE-2ADR_BA-110DE-2A2DR', 300.00, 'Casio G-Shock GA-100DE-2ADR_BA-110DE-2A2DR.jpg',
    'Case/Bezel Material : ResinResin StrapDigital Analog DialMineral Crystal Glass200M and 100M Water ResistanceQuartz Movement'),
  new Product('Alexandre Christie AC 8517 BIPBA', 'Alexandre Christie AC 8517 BIPBA', 400.00, 'Alexandre Christie AC 8517 BIPBA.jpg',
    'Stainless SteelWater Resistant 3 ATMBlack and Blue colorMineral Crystal Glass'),
  new Product('Ferrari Scuderia RedRev 0870021', 'Ferrari Scuderia RedRev 0870021', 350.00, 'Ferrari Scuderia RedRev 0870021.jpg',
    'Ion Plating CaseRubber StrapBlack Pattern StrapDate DisplayAnalog Display30M Water ResistanceQuartz Movement'),
  new Product('Alexandre Christie AC 6455 BGDIV', 'Alexandre Christie AC 6455 BGDIV', 250.00, 'Alexandre Christie AC 6455 BGDIV.jpg',
    'Stainless SteelWater Resistant 5 ATMGold, Black, Green ColorMineral Crystal GlassChronograph for Men Watch'),
  new Product('TISSOT Chemin Des Tourelles Automatic', 'TISSOT Chemin Des Tourelles Automatic', 150.00, 'TISSOT Chemin Des Tourelles Automatic.jpg',
    'Stainless Steel CaseDual Tone Stainless Steel StrapSilver and White Mother of Pearl DialSapphire Crystal GlassWater Resistant 5 ATMSwiss Automatic MovementGold and Silver Color'),
  new Product('Alexandre Christie AC 8480 BIPBUIV', 'Alexandre Christie AC 8480 BIPBUIV', 100.00, 'Alexandre Christie AC 8480 BIPBUIV.jpg',
    'Stainless Steel with Ion PlatingMineral Crystal GlassWater Resistant 3 ATMBlack and Blue Color')
];

export function findProduct(sku, searchRange = products) {
  return searchRange.find(product => product.sku === sku);
}
