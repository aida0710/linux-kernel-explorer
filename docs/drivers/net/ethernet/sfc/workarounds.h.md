---
sidebar_position: 84
---
# workarounds.h

### ファイル情報

- パス: `drivers/net/ethernet/sfc/workarounds.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/****************************************************************************
 * Driver for Solarflare network controllers and boards
 * Copyright 2006-2013 Solarflare Communications Inc.
 */

#ifndef EFX_WORKAROUNDS_H
#define EFX_WORKAROUNDS_H

/*
 * Hardware workarounds.
 * Bug numbers are from Solarflare's Bugzilla.
 */

#define EFX_WORKAROUND_EF10(efx) (efx_nic_rev(efx) >= EFX_REV_HUNT_A0)

/* Lockup when writing event block registers at gen2/gen3 */
#define EFX_EF10_WORKAROUND_35388(efx)					\
	(((struct efx_ef10_nic_data *)efx->nic_data)->workaround_35388)
#define EFX_WORKAROUND_35388(efx)					\
	(efx_nic_rev(efx) == EFX_REV_HUNT_A0 && EFX_EF10_WORKAROUND_35388(efx))

/* Moderation timer access must go through MCDI */
#define EFX_EF10_WORKAROUND_61265(efx)					\
	(((struct efx_ef10_nic_data *)efx->nic_data)->workaround_61265)

#endif /* EFX_WORKAROUNDS_H */

```
