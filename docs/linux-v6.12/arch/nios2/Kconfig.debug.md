---
sidebar_position: 3
---
# Kconfig.debug

### ファイル情報

- パス: `linux-v6.12/arch/nios2/Kconfig.debug`

### コンテンツ

```debug
# SPDX-License-Identifier: GPL-2.0

config EARLY_PRINTK
	bool "Activate early kernel debugging"
	default y
	depends on TTY
	select SERIAL_CORE_CONSOLE
	help
	  Enable early printk on console.
	  This is useful for kernel debugging when your machine crashes very
	  early before the console code is initialized.
	  You should normally say N here, unless you want to debug such a crash.

```
