import { ProductComponentComposite } from './composite/product-component-composite';
import { PokemonTShirtDecorator } from './decorator/pokemon-tshirt-decorator';
import { DimensionFactory } from './factory/dimension-factory';
import { SizeFactory } from './factory/size-factory';
import { BellBottomPantDecorator } from './decorator/bell-bottom-pant-decorator';
import { ProductComposite } from './composite/product-composite';
import { Cart } from './composite/cart';
import { MiddleEastTaxVisitor } from './visitor/middle-east-tax-visitor';
import { ShipmentOrder } from './state/shipment-order-state';
import { InchAdapter } from './adapter/inch-adapter';

const dimensionFactory = new DimensionFactory();
const sizeFactory = new SizeFactory();
const tShirtThoraxDimensionM = dimensionFactory.create("Thorax", 102);
const tShirtWaistlineDimensionM = dimensionFactory.create("Waistline", 87);
const tShirtSizeM = sizeFactory.create("M", [tShirtWaistlineDimensionM, tShirtThoraxDimensionM]);
const tShirt = new ProductComponentComposite("TShirt", 49.99, [tShirtSizeM]);

tShirt.setCategory("T-Shirt");

const pokemonTShirt = new PokemonTShirtDecorator(tShirt);

console.log(tShirt.getName());
console.log(pokemonTShirt.getName());
console.log(pokemonTShirt.getCategories());

const pantLegDimensionPP = dimensionFactory.create("Leg", 70);
const pantBottomDimensionPP = dimensionFactory.create("Bottom", 15);
const pantSizePP = sizeFactory.create("PP", [pantLegDimensionPP, pantBottomDimensionPP]);
const pant = new ProductComponentComposite("Lumberjack pant", 200.00, [pantSizePP]);
const bellBottomLumberjackPant = new BellBottomPantDecorator(pant);

console.log(pant.getSizes().map((dimension) => dimension.getAllDimensions()));
console.log(bellBottomLumberjackPant.getSizes().map((dimension) => dimension.getAllDimensions()));

const tShirtCombo = new ProductComposite("combo1");
tShirtCombo.add(pokemonTShirt, tShirt);

const pantCombo = new ProductComposite("combo2");
pantCombo.add(pant, bellBottomLumberjackPant);

const productCombo = new ProductComposite("combo3");
productCombo.add(tShirtCombo, pantCombo);

const cart = new Cart(productCombo);
const middleEastVisitor = new MiddleEastTaxVisitor();

console.log(cart.getPrice());
console.log(cart.getPriceWithTaxes(middleEastVisitor));

console.log("--- Starting first order ---");

const firstOrder = new ShipmentOrder(cart);
firstOrder.shipOrder();
firstOrder.rejectPayment();
firstOrder.shipOrder();

console.log("--- Trying Again ---");

console.log("--- Starting second order ---");

const secondOrder = new ShipmentOrder(cart);
secondOrder.shipOrder();
secondOrder.approvePayment();
secondOrder.shipOrder();
console.log(tShirt.getSizes()[0])
const adapter = new InchAdapter(tShirt.getSizes()[0]);
console.log(adapter.getSize());