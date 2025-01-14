---
sidebar_position: 13
---
# board-xilfpga.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/generic/board-xilfpga.its.S`

### コンテンツ

```S
/ {
	images {
		fdt-xilfpga {
			description = "MIPSfpga (xilfpga) Device Tree";
			data = /incbin/("boot/dts/xilfpga/nexys4ddr.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		conf-xilfpga {
			description = "MIPSfpga Linux kernel";
			kernel = "kernel";
			fdt = "fdt-xilfpga";
		};
	};
};

```
