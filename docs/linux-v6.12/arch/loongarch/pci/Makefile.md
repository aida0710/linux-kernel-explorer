---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/loongarch/pci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the PCI specific kernel interface routines under Linux.
#

obj-y				+= pci.o
obj-$(CONFIG_ACPI)		+= acpi.o

```
