---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/pci/controller/mobiveil/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_PCIE_MOBIVEIL) += pcie-mobiveil.o
obj-$(CONFIG_PCIE_MOBIVEIL_HOST) += pcie-mobiveil-host.o
obj-$(CONFIG_PCIE_MOBIVEIL_PLAT) += pcie-mobiveil-plat.o
obj-$(CONFIG_PCIE_LAYERSCAPE_GEN4) += pcie-layerscape-gen4.o

```
