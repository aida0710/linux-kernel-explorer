---
sidebar_position: 266
---
# sysfs-class-iommu-intel-iommu

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/testing/sysfs-class-iommu-intel-iommu`

### コンテンツ

```txt
What:		/sys/class/iommu/<iommu>/intel-iommu/address
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		Physical address of the VT-d DRHD for this IOMMU.
		Format: %llx.  This allows association of a sysfs
		intel-iommu with a DMAR DRHD table entry.

What:		/sys/class/iommu/<iommu>/intel-iommu/cap
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		The cached hardware capability register value
		of this DRHD unit.  Format: %llx.

What:		/sys/class/iommu/<iommu>/intel-iommu/ecap
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		The cached hardware extended capability register
		value of this DRHD unit.  Format: %llx.

What:		/sys/class/iommu/<iommu>/intel-iommu/version
Date:		June 2014
KernelVersion:	3.17
Contact:	Alex Williamson <alex.williamson@redhat.com>
Description:
		The architecture version as reported from the
		VT-d VER_REG.  Format: %d:%d, major:minor

```
