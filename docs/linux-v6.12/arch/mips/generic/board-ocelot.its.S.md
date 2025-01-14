---
sidebar_position: 8
---
# board-ocelot.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/generic/board-ocelot.its.S`

### コンテンツ

```S
/* SPDX-License-Identifier: (GPL-2.0 OR MIT) */
/ {
	images {
		fdt-ocelot_pcb123 {
			description = "MSCC Ocelot PCB123 Device Tree";
			data = /incbin/("boot/dts/mscc/ocelot_pcb123.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};

		fdt-ocelot_pcb120 {
			description = "MSCC Ocelot PCB120 Device Tree";
			data = /incbin/("boot/dts/mscc/ocelot_pcb120.dtb");
			type = "flat_dt";
			arch = "mips";
			compression = "none";
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		conf-ocelot_pcb123 {
			description = "Ocelot Linux kernel";
			kernel = "kernel";
			fdt = "fdt-ocelot_pcb123";
		};

		conf-ocelot_pcb120 {
			description = "Ocelot Linux kernel";
			kernel = "kernel";
			fdt = "fdt-ocelot_pcb120";
		};
	};
};

```
