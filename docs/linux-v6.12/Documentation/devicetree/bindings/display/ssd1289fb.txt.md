---
sidebar_position: 69
---
# ssd1289fb.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/display/ssd1289fb.txt`

### コンテンツ

```txt
* Solomon SSD1289 Framebuffer Driver

Required properties:
  - compatible: Should be "solomon,ssd1289fb". The only supported bus for
    now is lbc.
  - reg: Should contain address of the controller on the LBC bus. The detail
    was described in Documentation/devicetree/bindings/powerpc/fsl/lbc.txt

Examples:
display@2,0 {
	compatible = "solomon,ssd1289fb";
	reg = <0x2 0x0000 0x0004>;
};

```
