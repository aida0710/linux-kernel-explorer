---
sidebar_position: 265
---
# sysfs-class-iommu-amd-iommu

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-iommu-amd-iommu`

### コンテンツ

```txt
What:		/sys/class/iommu/<iommu>/amd-iommu/cap
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		IOMMU capability header as documented in the AMD IOMMU
		specification.  Format: %x

What:		/sys/class/iommu/<iommu>/amd-iommu/features
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		Extended features of the IOMMU.  Format: %llx

```
