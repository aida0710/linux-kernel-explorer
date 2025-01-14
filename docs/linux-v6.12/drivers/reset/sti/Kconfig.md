---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/reset/sti/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
if ARCH_STI || COMPILE_TEST

config STIH407_RESET
	bool "STIH407 Reset Driver" if COMPILE_TEST

endif

```
