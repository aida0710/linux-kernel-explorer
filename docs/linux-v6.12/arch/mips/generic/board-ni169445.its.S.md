---
sidebar_position: 6
---
# board-ni169445.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/generic/board-ni169445.its.S`

### コンテンツ

```S
/ {
	images {
		fdt-ni169445 {
			description = "NI 169445 device tree";
			data = /incbin/("boot/dts/ni/169445.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		conf-ni169445 {
			description = "NI 169445 Linux Kernel";
			kernel = "kernel";
			fdt = "fdt-ni169445";
		};
	};
};

```
