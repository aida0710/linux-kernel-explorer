---
sidebar_position: 85
---
# pcm_drm_eld.h

### ファイル情報

- パス: `linux-v6.12/include/sound/pcm_drm_eld.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __SOUND_PCM_DRM_ELD_H
#define __SOUND_PCM_DRM_ELD_H

int snd_pcm_hw_constraint_eld(struct snd_pcm_runtime *runtime, void *eld);

#endif

```
