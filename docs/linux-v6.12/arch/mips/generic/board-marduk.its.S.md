---
sidebar_position: 5
---
# board-marduk.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/generic/board-marduk.its.S`

### コンテンツ

```S
/ {
	images {
		fdt-marduk {
			description = "img,pistachio-marduk Device Tree";
			data = /incbin/("boot/dts/img/pistachio_marduk.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		conf-marduk {
			description = "Marduk Linux kernel";
			kernel = "kernel";
			fdt = "fdt-marduk";
		};
	};
};

```
