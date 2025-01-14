---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/psci/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
obj-$(CONFIG_ARM_PSCI_FW)	+= psci.o
obj-$(CONFIG_ARM_PSCI_CHECKER)	+= psci_checker.o

```
