---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/no_write_if_dep_unmet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

config A
	bool "A"

choice
	prompt "Choice ?"
	depends on A

config CHOICE_B
	bool "Choice B"

config CHOICE_C
	bool "Choice C"

endchoice

```
