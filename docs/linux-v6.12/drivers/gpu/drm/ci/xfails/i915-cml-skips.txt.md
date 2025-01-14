---
sidebar_position: 12
---
# i915-cml-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/i915-cml-skips.txt`

### コンテンツ

```txt
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
xe_module_load.*
api_intel_allocator.*
kms_cursor_legacy.*
i915_pm_rpm.*

# Kernel panic
drm_fdinfo.*
kms_frontbuffer_tracking.*

```
