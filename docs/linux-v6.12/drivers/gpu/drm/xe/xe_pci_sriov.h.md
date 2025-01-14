---
sidebar_position: 210
---
# xe_pci_sriov.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/xe_pci_sriov.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2023-2024 Intel Corporation
 */

#ifndef _XE_PCI_SRIOV_H_
#define _XE_PCI_SRIOV_H_

struct pci_dev;

#ifdef CONFIG_PCI_IOV
int xe_pci_sriov_configure(struct pci_dev *pdev, int num_vfs);
#else
static inline int xe_pci_sriov_configure(struct pci_dev *pdev, int num_vfs)
{
	return 0;
}
#endif

#endif

```
