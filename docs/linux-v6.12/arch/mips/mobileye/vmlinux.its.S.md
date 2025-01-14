---
sidebar_position: 5
---
# vmlinux.its.S

### ファイル情報

- パス: `linux-v6.12/arch/mips/mobileye/vmlinux.its.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/dts-v1/;

/ {
	description = KERNEL_NAME;
	#address-cells = <ADDR_CELLS>;

	images {
		kernel {
			description = KERNEL_NAME;
			data = /incbin/(VMLINUX_BINARY);
			type = "kernel";
			arch = "mips";
			os = "linux";
			compression = VMLINUX_COMPRESSION;
			load = /bits/ ADDR_BITS <VMLINUX_LOAD_ADDRESS>;
			entry = /bits/ ADDR_BITS <VMLINUX_ENTRY_ADDRESS>;
			hash {
				algo = "sha1";
			};
		};
	};

	configurations {
		default = "conf-default";

		conf-default {
			description = "Generic Linux kernel";
			kernel = "kernel";
		};
	};
};

```
