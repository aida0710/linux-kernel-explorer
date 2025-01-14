---
sidebar_position: 33
---
# msm-apq8016-skips.txt

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/xfails/msm-apq8016-skips.txt`

### コンテンツ

```txt
# Skip driver specific tests
^amdgpu.*
nouveau_.*
^panfrost.*
^v3d.*
^vc4.*
^vmwgfx*

# Skip intel specific tests
gem_.*
i915_.*
tools_test.*

# Currently fails and causes coverage loss for other tests
# since core_getversion also fails.
core_hotunplug.*

```
