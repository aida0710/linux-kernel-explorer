---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/riscv/errata/Makefile`

### コンテンツ

```txt
ifdef CONFIG_RELOCATABLE
KBUILD_CFLAGS += -fno-pie
endif

ifdef CONFIG_RISCV_ALTERNATIVE_EARLY
ifdef CONFIG_FORTIFY_SOURCE
KBUILD_CFLAGS += -D__NO_FORTIFY
endif
endif

obj-$(CONFIG_ERRATA_ANDES) += andes/
obj-$(CONFIG_ERRATA_SIFIVE) += sifive/
obj-$(CONFIG_ERRATA_THEAD) += thead/

```
