---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/riscv/errata/andes/Makefile`

### コンテンツ

```txt
ifdef CONFIG_RISCV_ALTERNATIVE_EARLY
CFLAGS_errata.o := -mcmodel=medany
endif

obj-y += errata.o

```
