---
sidebar_position: 44
---
# mhi.h

### ファイル情報

- パス: `drivers/net/wireless/ath/ath12k/mhi.h`

### コンテンツ

```h
/* SPDX-License-Identifier: BSD-3-Clause-Clear */
/*
 * Copyright (c) 2020-2021 The Linux Foundation. All rights reserved.
 * Copyright (c) 2021-2022, 2024 Qualcomm Innovation Center, Inc. All rights reserved.
 */
#ifndef _ATH12K_MHI_H
#define _ATH12K_MHI_H

#include "pci.h"

#define PCIE_TXVECDB				0x360
#define PCIE_TXVECSTATUS			0x368
#define PCIE_RXVECDB				0x394
#define PCIE_RXVECSTATUS			0x39C

#define MHISTATUS				0x48
#define MHICTRL					0x38
#define MHICTRL_RESET_MASK			0x2

enum ath12k_mhi_state {
	ATH12K_MHI_INIT,
	ATH12K_MHI_DEINIT,
	ATH12K_MHI_POWER_ON,
	ATH12K_MHI_POWER_OFF,
	ATH12K_MHI_POWER_OFF_KEEP_DEV,
	ATH12K_MHI_FORCE_POWER_OFF,
	ATH12K_MHI_SUSPEND,
	ATH12K_MHI_RESUME,
	ATH12K_MHI_TRIGGER_RDDM,
	ATH12K_MHI_RDDM,
	ATH12K_MHI_RDDM_DONE,
};

extern const struct mhi_controller_config ath12k_mhi_config_qcn9274;
extern const struct mhi_controller_config ath12k_mhi_config_wcn7850;

int ath12k_mhi_start(struct ath12k_pci *ar_pci);
void ath12k_mhi_stop(struct ath12k_pci *ar_pci, bool is_suspend);
int ath12k_mhi_register(struct ath12k_pci *ar_pci);
void ath12k_mhi_unregister(struct ath12k_pci *ar_pci);
void ath12k_mhi_set_mhictrl_reset(struct ath12k_base *ab);
void ath12k_mhi_clear_vector(struct ath12k_base *ab);

void ath12k_mhi_suspend(struct ath12k_pci *ar_pci);
void ath12k_mhi_resume(struct ath12k_pci *ar_pci);
void ath12k_mhi_coredump(struct mhi_controller *mhi_ctrl, bool in_panic);
#endif

```
