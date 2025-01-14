---
sidebar_position: 10
---
# intel-stratix10-soc-fpga-mgr.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/fpga/intel-stratix10-soc-fpga-mgr.txt`

### コンテンツ

```txt
Intel Stratix10 SoC FPGA Manager

Required properties:
The fpga_mgr node has the following mandatory property, must be located under
firmware/svc node.

- compatible : should contain "intel,stratix10-soc-fpga-mgr" or
	       "intel,agilex-soc-fpga-mgr"

Example:

	firmware {
		svc {
			fpga_mgr: fpga-mgr {
				compatible = "intel,stratix10-soc-fpga-mgr";
			};
		};
	};

```
