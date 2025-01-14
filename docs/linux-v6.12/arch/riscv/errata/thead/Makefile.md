---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/riscv/errata/thead/Makefile`

### コンテンツ

```txt
ifdef CONFIG_RISCV_ALTERNATIVE_EARLY
CFLAGS_errata.o := -mcmodel=medany
ifdef CONFIG_FTRACE
CFLAGS_REMOVE_errata.o = $(CC_FLAGS_FTRACE)
endif
ifdef CONFIG_KASAN
KASAN_SANITIZE_errata.o := n
endif
endif

obj-y += errata.o

```
