---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/csky/lib/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
lib-y  := usercopy.o delay.o
obj-$(CONFIG_FUNCTION_ERROR_INJECTION) += error-inject.o
ifneq ($(CONFIG_HAVE_EFFICIENT_UNALIGNED_STRING_OPS), y)
lib-y  += string.o
endif

```
