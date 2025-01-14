---
sidebar_position: 1
---
# board-boston.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/generic/board-boston.its.S`

### コンテンツ

```S
/ {
	images {
		fdt-boston {
			description = "img,boston Device Tree";
			data = /incbin/("boot/dts/img/boston.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		conf-boston {
			description = "Boston Linux kernel";
			kernel = "kernel";
			fdt = "fdt-boston";
		};
	};
};

```
