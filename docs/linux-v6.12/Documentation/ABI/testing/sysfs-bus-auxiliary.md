---
sidebar_position: 89
---
# sysfs-bus-auxiliary

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-bus-auxiliary`

### コンテンツ

```txt
What:		/sys/bus/auxiliary/devices/.../irqs/
Date:		April, 2024
Contact:	Shay Drory <shayd@nvidia.com>
Description:
		The /sys/devices/.../irqs directory contains a variable set of
		files, with each file is named as irq number similar to PCI PF
		or VF's irq number located in msi_irqs directory.
		These irq files are added and removed dynamically when an IRQ
		is requested and freed respectively for the PCI SF.

```
