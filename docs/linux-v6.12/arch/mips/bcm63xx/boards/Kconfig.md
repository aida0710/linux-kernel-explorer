---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/arch/mips/bcm63xx/boards/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
choice
	prompt "Board support"
	depends on BCM63XX
	default BOARD_BCM963XX

config BOARD_BCM963XX
	bool "Generic Broadcom 963xx boards"
	select SSB

endchoice

```
