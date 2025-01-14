---
sidebar_position: 6
---
# i915-amly-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/i915-amly-skips.txt`

### コンテンツ

```txt
# Suspend to RAM seems to be broken on this machine
.*suspend.*
# This is generating kernel oops with divide error
kms_plane_scaling@invalid-parameters

# Skip driver specific tests
^amdgpu.*
^msm.*
nouveau_.*
^panfrost.*
^v3d.*
^vc4.*
^vmwgfx*

# GEM tests takes ~1000 hours, so skip it
gem_.*

# Hangs the machine and timeout occurs
i915_pm_rc6_residency.*
i915_suspend.*
kms_scaling_modes.*
i915_pm_rpm.*

# Kernel panic
drm_fdinfo.*

```
