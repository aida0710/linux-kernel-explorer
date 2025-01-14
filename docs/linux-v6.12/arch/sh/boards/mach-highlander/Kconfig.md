---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-highlander/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
if SH_HIGHLANDER

choice
	prompt "Highlander options"
	default SH_R7780MP

config SH_R7780RP
	bool "R7780RP-1 board support"
	depends on CPU_SUBTYPE_SH7780

config SH_R7780MP
	bool "R7780MP board support"
	depends on CPU_SUBTYPE_SH7780
	help
	  Selecting this option will enable support for the mass-production
	  version of the R7780RP. If in doubt, say Y.

config SH_R7785RP
	bool "R7785RP board support"
	depends on CPU_SUBTYPE_SH7785
	select GPIOLIB

endchoice

endif

```
