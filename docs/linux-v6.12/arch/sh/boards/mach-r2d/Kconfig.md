---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/sh/boards/mach-r2d/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
if SH_RTS7751R2D

menu "RTS7751R2D Board Revision"

config RTS7751R2D_PLUS
	bool "R2D-PLUS"
	help
	  Selecting this option will configure the kernel for R2D-PLUS.

	  R2D-PLUS is the smaller of the two R2D board versions, equipped
	  with a single PCI slot.

config RTS7751R2D_1
	bool "R2D-1"
	help
	  Selecting this option will configure the kernel for R2D-1.

	  R2D-1 is the larger of the two R2D board versions, equipped
	  with two PCI slots.
endmenu

endif


```
