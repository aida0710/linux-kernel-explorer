---
sidebar_position: 15
---
# uqe_serial.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/soc/fsl/cpm_qe/uqe_serial.txt`

### コンテンツ

```txt
* Serial

Required Properties:
compatible : must be "fsl,<chip>-ucc-uart". For t1040, must be
"fsl,t1040-ucc-uart".
port-number : port number of UCC-UART
tx/rx-clock-name : should be "brg1"-"brg16" for internal clock source,
		   should be "clk1"-"clk28" for external clock source.

Example:

	ucc_serial: ucc@2200 {
		compatible = "fsl,t1040-ucc-uart";
		port-number = <0>;
		rx-clock-name = "brg2";
		tx-clock-name = "brg2";
	};

```
