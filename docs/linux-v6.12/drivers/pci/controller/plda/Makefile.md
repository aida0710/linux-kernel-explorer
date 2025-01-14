---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pci/controller/plda/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_PCIE_PLDA_HOST) += pcie-plda-host.o
obj-$(CONFIG_PCIE_MICROCHIP_HOST) += pcie-microchip-host.o
obj-$(CONFIG_PCIE_STARFIVE_HOST) += pcie-starfive.o

```
