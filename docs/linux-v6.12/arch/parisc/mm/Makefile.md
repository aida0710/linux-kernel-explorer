---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/parisc/mm/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for arch/parisc/mm
#

obj-y	 := init.o fault.o ioremap.o fixmap.o
obj-$(CONFIG_HUGETLB_PAGE) += hugetlbpage.o

```
