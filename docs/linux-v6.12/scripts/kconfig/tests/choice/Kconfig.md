---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/choice/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

choice
	prompt "boolean choice"
	default BOOL_CHOICE1

config BOOL_CHOICE0
	bool "choice 0"

config BOOL_CHOICE1
	bool "choice 1"

endchoice

```
