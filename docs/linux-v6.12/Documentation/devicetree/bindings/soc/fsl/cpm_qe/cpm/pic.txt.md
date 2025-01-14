---
sidebar_position: 3
---
# pic.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/soc/fsl/cpm_qe/cpm/pic.txt`

### コンテンツ

```txt
* Interrupt Controllers

Currently defined compatibles:
- fsl,cpm1-pic
  - only one interrupt cell
- fsl,pq1-pic
- fsl,cpm2-pic
  - second interrupt cell is level/sense:
    - 2 is falling edge
    - 8 is active low

Example:
	interrupt-controller@10c00 {
		#interrupt-cells = <2>;
		interrupt-controller;
		reg = <10c00 80>;
		compatible = "mpc8272-pic", "fsl,cpm2-pic";
	};

```
