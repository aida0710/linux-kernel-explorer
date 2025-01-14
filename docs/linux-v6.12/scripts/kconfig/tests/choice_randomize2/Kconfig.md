---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/choice_randomize2/Kconfig`

### コンテンツ

```txt
choice
	prompt "This is always invisible"
	depends on n

config DUMMY
	bool "DUMMY"

endchoice

choice
	prompt "Choose A or B"

config A
	bool "A"

config B
	bool "B"

endchoice

config FOO
	bool "FOO"
	depends on A

choice
	prompt "Choose X"
	depends on FOO

config X
	bool "X"

endchoice

```
