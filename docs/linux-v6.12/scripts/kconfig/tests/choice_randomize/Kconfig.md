---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/choice_randomize/Kconfig`

### コンテンツ

```txt
choice
	prompt "choose A or B"

config A
	bool "A"

config B
	bool "B"

endchoice

choice
	prompt "choose X or Y"
	depends on B

config X
	bool "X"

config Y
	bool "Y"

endchoice

```
