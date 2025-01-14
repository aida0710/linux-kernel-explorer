---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/x86/platform/pvh/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
OBJECT_FILES_NON_STANDARD_head.o := y
KASAN_SANITIZE := n

obj-$(CONFIG_PVH) += enlighten.o
obj-$(CONFIG_PVH) += head.o

```
