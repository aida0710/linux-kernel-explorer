---
sidebar_position: 1
---
# board-epm5.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/mobileye/board-epm5.its.S`

### コンテンツ

```S
/* SPDX-License-Identifier: (GPL-2.0 OR MIT) */
/ {
	images {
		fdt-mobileye-epm5 {
			description = "Mobileeye MP5 Device Tree";
			data = /incbin/("boot/dts/mobileye/eyeq5-epm5.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

    configurations {
		default = "conf-1";
		conf-1 {
			description = "Mobileye EPM5 Linux kernel";
			kernel = "kernel";
			fdt = "fdt-mobileye-epm5";
		};
	};
};

```
