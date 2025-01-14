---
sidebar_position: 9
---
# i915-apl-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/i915-apl-skips.txt`

### コンテンツ

```txt
# Suspend to RAM seems to be broken on this machine
.*suspend.*
# This is generating kernel oops with divide error
kms_plane_scaling@invalid-parameters
# This is cascading issues
kms_3d

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
i915_pm_rpm.*
device_reset.*
api_intel_allocator.*
kms_frontbuffer_tracking.*
kms_ccs.*

# Kernel panic
drm_fdinfo.*

```
