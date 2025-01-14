---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/pci/pwrctl/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

config HAVE_PWRCTL
	bool

config PCI_PWRCTL
	tristate

config PCI_PWRCTL_PWRSEQ
	tristate
	select POWER_SEQUENCING
	select PCI_PWRCTL

```
