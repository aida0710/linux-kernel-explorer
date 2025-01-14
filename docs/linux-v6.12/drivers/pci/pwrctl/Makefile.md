---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pci/pwrctl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-$(CONFIG_PCI_PWRCTL)		+= pci-pwrctl-core.o
pci-pwrctl-core-y			:= core.o

obj-$(CONFIG_PCI_PWRCTL_PWRSEQ)		+= pci-pwrctl-pwrseq.o

```
